'use client';

import createCache, { Options } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useServerInsertedHTML } from 'next/navigation';
import { PropsWithChildren, useState } from 'react';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0064d2',
    },
    secondary: {
      main: '#1cb0f6',
    },
  },
});

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(props:PropsWithChildren<{ options: Options }>) {
  const { options, children } = props;

  const [{ cache, flush }] = useState(() => {
    const emotionCache = createCache(options);
    emotionCache.compat = true;
    const prevInsert = emotionCache.insert;
    let inserted: string[] = [];
    emotionCache.insert = (...args) => {
      const serialized = args[1];
      if (emotionCache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flushHandler = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache: emotionCache, flush: flushHandler };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    const styles = names.map((name) => cache.inserted[name]).join('');
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
