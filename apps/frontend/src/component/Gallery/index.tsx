'use client';

import useSWR from 'swr';
import OSS from 'ali-oss';
import MD5 from 'crypto-js/md5';
import encLATIN1 from 'crypto-js/enc-latin1';
import encHEX from 'crypto-js/enc-hex';
import { useEffect, useState } from 'react';
import { envBrowser } from '@/env.browser';
import ImageOSS from '../ImageOSS';
import Alerts from '../Alerts';
import {
  ImageList, ImageListItem, Unstable_Grid2 as Grid, Button, ImageListItemBar,
  IconButton, Modal, ModalProps, Paper, useMediaQuery, useTheme,
} from '@/mui/material';
import { Delete } from '@/mui/icons-material';
import { LoadingButton } from '@/mui/lab';
import { useSnackbar } from '@/hooks/snackbar';

const fetcher = (url:string) => fetch(url, { method: 'POST' }).then((res) => res.json()).then((res) => { console.log(res); return res; });
export interface GalleryProps extends Omit<ModalProps, 'children'> {
}

export default function Gallery(props: GalleryProps) {
  const { ...modalProps } = props;
  const { data: { credentials: { accessKeyId, accessKeySecret, securityToken } } } = useSWR('/api/oss/sts', fetcher, { focusThrottleInterval: 1000 * 6, suspense: true });
  const [client, setClient] = useState<OSS>();
  const [list, setList] = useState<string[]>([]);
  const [deleteAlert, setDeleteAlert] = useState('');
  const [uploading, setUploading] = useState(false);
  const snackbar = useSnackbar();
  const theme = useTheme();
  const matcheUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const matcheUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const matcheUpLg = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    const OSSClient = new OSS({
      accessKeyId,
      accessKeySecret,
      stsToken: securityToken,
      // region表示您申请OSS服务所在的地域，例如oss-cn-hangzhou。
      region: `oss-${envBrowser.ossLocaltion}`,
      bucket: envBrowser.ossBucket,
    });
    setClient(OSSClient);
    OSSClient.listV2({}, {}).then((res) => {
      setList(res.objects.map((file) => file.name));
    });
  }, [accessKeyId, accessKeySecret, securityToken]);

  const upload = async (files: FileList | null) => {
    setUploading(true);
    if (files) {
      const tasks = [...files].map((file) => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', (e) => {
          const result = e.target?.result;
          if (!result) {
            reject();
            return;
          }
          const hash = MD5(encLATIN1.parse(result as string));
          let md5 = hash.toString(encHEX);
          const { name } = file;
          const matchs = name.match(/\.\w+$/);
          if (matchs) {
            md5 += matchs[0];
          }
          const headers = {
            'Content-Disposition': name,
            'x-oss-forbid-overwrite': 'true',
          };
          client?.put(md5, file, { headers }).then((res) => {
            resolve(res.name);
          }, (err) => {
            if (err.code === 'FileAlreadyExists') {
              console.warn('文件已存在: ', md5);
              resolve(md5);
            } else {
              reject(err);
            }
          });
        });
        reader.readAsBinaryString(file);
      }));
      await Promise.all(tasks).then((res) => {
        snackbar({ message: `上传成功:${res.join()}`, severity: 'success' });
      }, (err) => {
        console.error(err);
        snackbar({ message: `上传失败:${err}`, severity: 'error' });
      });
    }
    setUploading(false);
  };

  const deleteItem = async (name: string) => {
    await client?.delete(name);
  };

  const getCols = () => {
    if (matcheUpLg) return 5;
    if (matcheUpMd) return 4;
    if (matcheUpSm) return 3;
    return 2;
  };

  return (
    <Modal {...modalProps}>
      <Paper sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '90vw', sm: '80vw', md: '60vw' },
        minHeight: '50vh',
        p: 2,
      }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} sx={{ textAlign: 'right' }}>
            <LoadingButton loading={uploading} component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" onChange={(e) => upload(e.target.files)} />
            </LoadingButton>
          </Grid>
          <Grid xs={12}>
            <ImageList cols={getCols()}>
              {list.map((file) => (
                <ImageListItem key={file}>
                  <ImageOSS name={file} process="resize,w_164,h_164/quality,q_75" alt={file} />
                  <ImageListItemBar
                    sx={{
                      background: 'rgba(0,0,0,0)',
                    }}
                    position="top"
                    actionIcon={(
                      <IconButton
                        sx={{ color: 'white', background: 'rgba(0,0,0,0.5)' }}
                        aria-label={`delete ${file}`}
                        onClick={() => setDeleteAlert(file)}
                      >
                        <Delete />
                      </IconButton>
                    )}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
        <Alerts
          open={!!deleteAlert}
          onClose={() => setDeleteAlert('')}
          content="确认删除?"
          onSubmit={() => deleteItem(deleteAlert)}
        />
      </Paper>
    </Modal>
  );
}
