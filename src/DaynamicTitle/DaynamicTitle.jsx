import { useEffect } from "react";

const DaynamicTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Bistro Boss Restaurant`;
  }, [title]);
};

export default DaynamicTitle;
