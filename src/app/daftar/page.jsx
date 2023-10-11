export default function Daftar() {
    return (
        <main>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"></link>
        {/* <section className="vh-200" style={{ backgroundColor: '#131230' }}> */}
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-6 ">
                        <div className="card shadow-3 px-5" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-5 text-center">
                                <div className="d-flex align-items-center justify-content-start mb-4">
                                    <p><a href="/"><i className="fas fa-arrow-left fa-1x me-3 text-dark"></i></a>Kembali</p>
                                </div>
                                <img src="/assets/logo.jpg" alt="Logo BijakCuan" style={{ borderRadius: '2rem', height: '100px', width: '100px' }} className="mb-4" />
                                <h3 className="mb-1 fw-bold">Daftar</h3>
                                <p className="mb-4">Mulai perjalanan Anda bersama BijakCuan</p>

                                <div className="form-outline mb-3">
                                    <input type="name" id="name" className="form-control form-control-sm" placeholder="Nama (Maks. 50 Karakter)" style={{ backgroundColor: '#DCDCDC' }} />
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="username" id="username" className="form-control form-control-sm" placeholder="Username" style={{ backgroundColor: '#DCDCDC' }} />
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="password" className="form-control form-control-sm" placeholder="Password" style={{ backgroundColor: '#DCDCDC' }} />
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="email" id="email" className="form-control form-control-sm" placeholder="Alamat Email" style={{ backgroundColor: '#DCDCDC' }} />
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="text" id="noTlp" className="form-control form-control-sm" placeholder="No Telepon" style={{ backgroundColor: '#DCDCDC' }} />
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="text" id="domisili" className="form-control form-control-sm" placeholder="Domisili" style={{ backgroundColor: '#DCDCDC' }} />
                                </div>

                                <div className="d-grid gap mb-4">
                                    <button className="btn btn-primary" type="button" style={{ borderRadius: '10px' }}>Daftar</button>
                                </div>

                                <p>Sudah memiliki akun? <a href="#" className="text-dark">Login sekarang</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </section> */}
        </main>
    )
}
