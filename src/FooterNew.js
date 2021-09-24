import React from 'react'
import './Footer.css'

function FooterNew() {
    return (
        <div>
            <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-white">Devsera</h5>
                    <p className="small text-muted">Found a bug!! Mail us at <a href='#'>admin@devsara.org</a>.</p>
                    <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <br />
                    <br />
                    <ul className="list-unstyled text-muted">
                        <li><a href="#">Get started</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-3">Newsletter</h5>
                    <p className="small text-muted">Get access to our exclusive newsletter by providing your consent. We will mail you the further steps.</p>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}

export default FooterNew