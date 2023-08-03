const ServicesData = (props) => {
  return (
    <div className="col-lg-6 px-4">
      <div className="servicesCard d-flex row">
        <div className="left position-relative col-3">
          <span className="servicesIcon">
            <div className="services-icon">{props.icon}</div>
          </span>
        </div>
        <div className="right col-9">
          <div className='featuresH mt-2 mb-2'>{props.heading}</div>
          <p className='p'>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesData