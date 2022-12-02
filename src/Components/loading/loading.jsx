import style from "./loading.module.css";

export const Loading = () => {
  return (
    <div className={style.box}>
    <div className={style.lds_roller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};
