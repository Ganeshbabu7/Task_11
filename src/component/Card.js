function Card (props) {
    return <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
            <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
                <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
                <hr/>
                <ul className="fa-ul">
                    <li className={props.data.userEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.user}</li>
                    <li className={props.data.storageEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
                    <li className={props.data.publicProjectEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.publicProjectEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.publicProject}</li>
                    <li className={props.data.accessEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.accessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.access}</li>
                    <li className={props.data.privateProjectEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.privateProjectEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.privateProject}</li>
                    <li className={props.data.supportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.supportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.support}</li>
                    <li className={props.data.domainEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.domainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.domain}</li>
                    <li className={props.data.reportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.reportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.report}</li>
                </ul>
                <div className="d-grid">
                    <a href="javascirpt(void)" className="btn btn-primary text-uppercase">Button</a>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Card;