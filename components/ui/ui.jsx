import style from './ui.module.scss'

function ReadMore({link}) {
  return (
  <a className={style.readMore} href={link}>ReadMore</a>
  )
}
ReadMore.defaultProps = {
  link: "#"
};

export {ReadMore}