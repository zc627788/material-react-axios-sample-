/* eslint-disable prettier/prettier */
import { useState, useEffect, useCallback } from 'react';

export const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState(true);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(
    params => {
      setStatus(true);
      console.log(`status`);
      setValue(null);
      setError(null);
      return asyncFunction(params)
        .then(response => {
          setValue(response);
          setStatus(false);
        })
        .catch(error => {
          const a = error?.message?.split(' ') || [];
          console.log(`aaaaa`, a);
          setStatus(true);
          // 重复请求为a.length==1,错误 失败请a.length>1
          if (a.length > 1) {
            setStatus(false);
          }
          setError(error);
        });
    },
    [asyncFunction]
  );
  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return { execute, status, value, error };
};
