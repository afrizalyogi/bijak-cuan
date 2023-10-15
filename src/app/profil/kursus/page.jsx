import Link from "next/link"

export default function KursusSaya() {
    return(
            <div class="card"  style={{borderRadius: '10px'}}>
                <div class="card-body">
                    <div class="row mx-3">
                        <div class="col-md-12 my-3">
                            <h5>Selamat Belajar</h5>
                        </div>
                        <div class="col-md-12">
                            <p>Silahkan mempelajari materi kelas yang telah kami desain dengan baik untuk mencapai goals Anda</p>
                        </div>
                        <div class="col-md-12 mt-4">
                            <Link href={""} className="btn btn-primary btn-sm">
                                Mulai Belajar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
