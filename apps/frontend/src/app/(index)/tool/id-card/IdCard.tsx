'use client';

// @ts-ignore
import { register, GB2260 } from 'gb2260';
// @ts-ignore
import GBdata from 'gb2260/lib/201607';
import { useCallback, useReducer, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import {
  Autocomplete, Box, Stack, Tab, Tabs, TextField, Unstable_Grid2 as Grid, Select, MenuItem,
  Grid2Props, FormControl, InputLabel, Button,
} from '@/mui/material';
import { TabList, TabContext, TabPanel } from '@/mui/lab';
import { DatePicker } from '@/mui/x-date-pickers';
import { SexEnum, sexEnumDesc } from '@/utils/state';

register('201607', GBdata);
const gbdata = new GB2260('201607');
const provinces = gbdata.provinces();
console.log(2222, provinces);

type Value = {
  name: string,
  code: string
} | null;
interface State {
  province: Value
  prefecture: Value
  city: Value
}

function GridItem(props: Grid2Props) {
  return <Grid xs={6} sm={4} md={3} {...props} />;
}

export default function IdCard() {
  const [tab, setTab] = useState('2');
  const [prefectures, setPrefectures] = useState([]);
  const [counties, setCounties] = useState([]);
  const [date, setDate] = useState<Dayjs | null>(dayjs('1999-06-08'));
  const [sex, setSex] = useState(SexEnum.MAN);
  const [ids, setIds] = useState<string[]>([]);

  const reducer = useCallback((state: State, action: { type: string, value: Value }):State => {
    if (action.type === 'province') {
      if (!action.value) {
        return {
          province: null,
          prefecture: null,
          city: null,
        };
      }
      const values = gbdata.prefectures(action.value.code);
      setPrefectures(values);
      const value = values[0];
      const items = gbdata.counties(value.code);
      setCounties(items);
      return {
        province: action.value,
        prefecture: value,
        city: items[0],
      };
    }
    if (action.type === 'prefecture') {
      if (!action.value) {
        return {
          ...state,
          prefecture: null,
          city: null,
        };
      }
      const value = gbdata.counties(action.value.code);
      setCounties(value);
      return {
        ...state,
        prefecture: action.value,
        city: value[0],
      };
    }
    if (action.type === 'countie') {
      return {
        ...state,
        city: action.value,
      };
    }
    return state;
  }, []);
  const [state, dispatch] = useReducer(reducer, {
    province: null,
    prefecture: null,
    city: null,
  });
  const generate = () => {
    if (!state.city?.code) {
      console.log('no contie');
      return;
    }
    if (!date) {
      console.log('no date');
      return;
    }
    const prefix = `${state.city.code}${date.format('YYYYMMDD')}`;
    const arr = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const arr2 = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    const random = () => {
      const sortCode = `${Math.floor(Math.random() * 99 + 1)}`;
      let sexCode = Math.floor(Math.random() * 5) * 2;
      if (sex === SexEnum.MAN) {
        sexCode += 1;
      }
      const str = prefix + sortCode + sexCode;

      const verifyIndex = [...str].reduce((p, c, i) => p + (Number(c) * arr[i]), 0) % 11;
      const value = str + arr2[verifyIndex];
      return value;
    };
    const values = Array.from({ length: 5 }, random);
    console.log(values);
  };
  return (
    <Box>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={(e, v) => setTab(v)} aria-label="生成方式">
            <Tab label="随机生成" value="1" />
            <Tab label="指定生成" value="2" />
            <Tab label="生成图片" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">1</TabPanel>
        <TabPanel value="2">
          <Grid container spacing={2}>
            <GridItem>
              <Autocomplete<Value>
                options={provinces}
                value={state.province}
                onChange={(e, v) => dispatch({ type: 'province', value: v })}
                getOptionLabel={(option) => option?.name || ''}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="所在省"
                    placeholder="选择省"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
                sx={{ flexGrow: 1 }}
              />
            </GridItem>
            <GridItem>
              <Autocomplete<Value>
                options={prefectures}
                value={state.prefecture}
                onChange={(e, v) => dispatch({ type: 'prefecture', value: v })}
                getOptionLabel={(option) => option?.name || ''}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="所在市"
                    placeholder="选择市"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
                sx={{ flexGrow: 1 }}
              />
            </GridItem>
            <GridItem>
              <Autocomplete<Value>
                options={counties}
                value={state.city}
                onChange={(e, v) => dispatch({ type: 'countie', value: v })}
                getOptionLabel={(option) => option?.name || ''}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="所在区"
                    placeholder="选择区"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
                sx={{ flexGrow: 1 }}
              />
            </GridItem>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <GridItem>
              <DatePicker label="出生日期" value={date} onChange={(v) => setDate(v)} />
            </GridItem>
            <GridItem>
              <FormControl sx={{ minWidth: 100 }}>
                <InputLabel id="sex-label">姓别</InputLabel>
                <Select<SexEnum> labelId="sex-label" label="姓别" value={sex} onChange={(e) => setSex(Number(e.target.value))}>
                  <MenuItem value={SexEnum.MAN}>{sexEnumDesc(SexEnum.MAN)}</MenuItem>
                  <MenuItem value={SexEnum.WOMAN}>{sexEnumDesc(SexEnum.WOMAN)}</MenuItem>
                </Select>
              </FormControl>
            </GridItem>
          </Grid>
          <Button sx={{ mt: 2 }} variant="contained" onClick={generate}>生成</Button>
        </TabPanel>
        <TabPanel value="3">。。。</TabPanel>
      </TabContext>
    </Box>
  );
}
