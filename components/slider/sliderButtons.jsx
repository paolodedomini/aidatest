import style from './sliderHome.module.scss'

export const SliderButtons = ({ selected, onClick }) => (
  <button
    className={`${style.singleDot} ${selected ? style.isSelected : ""}`}
    type="button"
    onClick={onClick}
  />
);
