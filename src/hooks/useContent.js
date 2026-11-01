import { useEffect, useState } from 'react';

/** Loads data from the content API once per mount. */
const useContent = (fetcher) => {
  const [state, setState] = useState({ data: [], loading: true, error: null });

  useEffect(() => {
    let cancelled = false;
    fetcher()
      .then((data) => !cancelled && setState({ data, loading: false, error: null }))
      .catch((error) => {
        console.error(error);
        if (!cancelled) setState({ data: [], loading: false, error });
      });
    return () => {
      cancelled = true;
    };
  }, [fetcher]);

  return state;
};

export default useContent;
