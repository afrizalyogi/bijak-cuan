import Link from "next/link"

export default function Transaksi() {
    return(

        <div className="container mt-3">
    <div className="row ">
        <div className="col-12">
            <div className="card" style={{ borderRadius: '10px' }}>
                <div className="card-body bg-light" style={{ borderRadius: '10px' }}>
                <button type="button" className="btn btn-success rounded-5 disabled" style={{ opacity: 1, pointerEvents: 'none'}}>Berhasil</button>
                   
                    <div className="container mt-3" style={{ borderRadius: '10px' }}>
                        <div className="d-flex justify-content-between w-100">
                            <h4 className="text-left">Membership Bulanan</h4>
                            <p className="text-right">TOrder ID #PAY-18123</p>
                        </div>

                        <div className="d-flex justify-content-between w-100">
                            <p className="text-left">Total pembayaran: <b>Rp 88.887</b></p>
                            <p className="text-right">17 Sep 2023</p>
                        </div>
                    </div>
                    <hr style={{ borderRadius: '10px' }} />

                    
                    <button type="button" className="btn btn-danger rounded-5 disabled" style={{ opacity: 1, pointerEvents: 'none'}}>Dibatalkan</button>


                    <div className="container mt-3" style={{ borderRadius: '10px' }}>
                        <div className="d-flex justify-content-between w-100">
                            <h4 className="text-left">Membership Bulanan</h4>
                            <p className="text-right">TOrder ID #PAY-18123</p>
                        </div>

                        <div className="d-flex justify-content-between w-100">
                            <p className="text-left">Total pembayaran: <b>Rp 88.887</b></p>
                            <p className="text-right">16 Sep 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            

    )
}
