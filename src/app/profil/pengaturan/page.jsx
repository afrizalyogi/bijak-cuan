export default function Pengaturan() {
	return (
		<div class="card container">
			<div class="card-body">
				<img
					src="assets/profil/user.png"
					alt="avatar"
					class="rounded-circle img-fluid mt-3 me-4"
					style={{ width: "64px" }}
				/>
				<button type="button" class="btn btn-outline-dark btn-sm mt-3">
					Upload Foto
				</button>
				<div class="mt-4">
					<div class="my-3">
						<label class="labels ">Nama (Maks. 50 karakter)</label>
						<input
							type="text"
							class="form-control"
							placeholder="Masukkan Nama"
							value="Ani"
						/>
					</div>
					<div>
						<label class="labels">Alamat Email</label>
						<input
							type="text"
							class="form-control"
							placeholder="Masukkan Alamat Email"
							value="Ani.food@gmail.com"
						/>
					</div>
					<div class="my-3">
						<label class="labels">Username</label>
						<input
							type="text"
							class="form-control"
							placeholder="Masukkan Username"
							value="Ani.food"
						/>
					</div>
					<div>
						<label class="labels">No Telepon</label>
						<input
							type="text"
							class="form-control"
							placeholder="Masukkan No Telepon"
							value="08129834765"
						/>
					</div>
					<div class="my-3">
						<label class="labels">Domisili</label>
						<input
							type="text"
							class="form-control"
							placeholder="Masukkan Domisili"
							value="Bandung"
						/>
					</div>
					<button
						type="button"
						class="btn btn-primary btn-lg btn-block btn-sm mt-2">
						Simpan Profil Anda
					</button>
				</div>
			</div>
		</div>
	)
}
