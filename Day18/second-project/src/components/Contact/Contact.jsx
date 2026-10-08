export default function Contact() {
    

    return (
        <>
            <div className="container-fluid text-2xl bg-info p-4 mt-3 text-center text-light">
                <h2>Contact</h2>
                <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required />
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required />
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                    <div className="invalid-feedback">
                        Please choose a username.
                    </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Contact me</button>
                </div>
                </form>

            </div>
        </>
    );
}
