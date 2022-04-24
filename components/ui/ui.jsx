import style from './ui.module.scss'

function ReadMore({link}) {
  return (
    <div className={style.readMore}><a href={link}>ReadMore</a></div>
  )
}
ReadMore.defaultProps = {
  link: "#"
};

export {ReadMore}