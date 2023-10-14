"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import GetPaketDisplay from "./get-paket-display"

export default function CardCourse() {
	const paketDisplay = GetPaketDisplay()
	return (
		<div className="card">
			<img src="/assets/checkout/course.png" alt="" />
			<div className="position-absolute ms-4 mt-4">
				<div className="btn btn-light">{paketDisplay}</div>
			</div>
			<div className="card-body">
				<h4 className="mb-4">Bijakcuan Membership</h4>
				<div className="d-flex flex-column gap-2">
					<div className="d-flex gap-2 align-item-center">
						<FontAwesomeIcon icon={faCircleCheck} />
						<p>Materi Up-To-Date</p>
					</div>
					<div className="d-flex gap-2 align-item-center">
						<FontAwesomeIcon icon={faCircleCheck} />
						<p>Mentor Profesional</p>
					</div>
					<div className="d-flex gap-2 align-item-center">
						<FontAwesomeIcon icon={faCircleCheck} />
						<p>Forum Diskusi</p>
					</div>
				</div>
			</div>
		</div>
	)
}
