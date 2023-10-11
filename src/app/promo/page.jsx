export default function Promo() {
    return(
        <main className="">
            
        <div className="container mt-2 mt-5">
            <p className="fs-2 fw-bold flex-column">Promo</p>
        </div>
        <div className="container text-center mt-5">
            <div className="row pb-5">
                <div className="col-3 rounded-5">
                    <div className="card rounded-5">
                         <img className="rounded-5" src="../../assets/promo/image 2.png" alt="" srcset="" />
                        <div className="card-body">
                            <p className="fw-bold text-sm-start ">Diskon Khusus untuk Pelanggan Kartu BCA</p>
                            <p className="text-sm-start pb-4">Dapatkan diskon eksklusif dengan total 30% bagi pengguna bank BCA</p>
                            <p className="fw-bold text-sm-start">Kode Promo <br/> <span className="fw-light">BCA30CUAN </span> </p>               
                        </div>
                    </div>
                </div>
                <div className="col-3 rounded-5">
                    <div className="card rounded-5">
                        <img className="rounded-5" src="../../assets/promo/image 3.png" alt="" srcset="" />    
                        <div className="card-body">
                            <p className="fw-bold text-sm-start ">Bonus E-book "Pengelolaan Keuangan untuk Pemula"</p>
                            <p className="text-sm-start fs-6">Berlangganan paket lifetime onus e-book eksklusif tentang pengelolaan keuangan untuk pemula.</p>
                            <p className="fw-bold text-sm-start">Kode Promo <br/> <span className="fw-light">EBOO72341K</span> </p>               
                        </div>
                    </div>
                </div>
                <div className="col-3 rounded-5">
                    <div className="card rounded-5">
                        <img className="rounded-5" src="../../assets/promo/image 4.png" alt="" srcset="" />
                        <div className="card-body">
                            <p className="fw-bold text-sm-start ">Diskon Pelatihan Pengelolaan Utang</p>
                            <p className="text-sm-start"> Hemat 25% untuk pelatihan strategi mengelola utang bisnis dengan lebih efektif dan hindari masalah keuangan.</p>
                            <p className="fw-bold text-sm-start">Kode Promo <br/> <span className="fw-light">DEBTFREE25</span> </p>               
                        </div>
                    </div>
                </div>
                <div className="col-3 rounded-5">
                    <div className="card rounded-5">
                        <img className="rounded-5" src="../../assets/promo/image 5.png" alt="" srcset="" />
                        
                        <div className="card-body">
                            <p className="fw-bold text-sm-start ">Diskon 15% Seminar Keuangan Online</p>
                            <p className="text-sm-start">Nikmati diskon 15% untuk tiket seminar keuangan.  Pelajari dari para ahli keuangan tanpa harus keluar rumah.</p>
                            <p className="fw-bold text-sm-start">Kode Promo <br/> <span className="fw-light">SEMINAR15OFF</span> </p>               
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="cta" className="row" style={{ backgroundImage: 'url(../../assets/promo/cta.png)' }}>
            <div className="container d-flex m-auto justify-content-center gap-5">
                <div className="col-5 p-5">
                    <picture><img src="../../assets/promo/image 24.png" alt="" srcset="" /></picture>
                </div>
                <div className="col-5 d-flex flex-column justify-content-center">
                    <p className="fa-2x fs-2 fw-bold d-flex text-white ">
                        Siapa Berkembang <br/> Bersama Bijak Cuan
                    </p>
                    <a className="text-decoration-none text-white btn btn-primary rounded-2" style={{ padding: '8px 30px', width: 'max-content' }}>
                     Lanjut
                    </a>

                </div> 
            </div>
        </div>

    </main> 
    )
}