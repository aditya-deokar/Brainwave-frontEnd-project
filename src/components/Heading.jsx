

const Heading = ({className , title , text}) => {
  return (
    <div className={`${className} max-w-[50rem] mb-12 mx-auto lg:mb-20 `}>


        {title && <h2 className="h2 text-center">{title}</h2>}
        {text && <p className="body-2 mt-4 text-n-4 text-center">{text}</p>}
    </div>
  )
}

export default Heading