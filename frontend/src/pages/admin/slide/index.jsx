import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from '../../../axios/index'
import swal from 'sweetalert'

function Index() {
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get('/admin/slide').then(({ data }) => {
			setData(data.data)
		})
	}, []);


	let deleteData = (id, index) => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this imaginary file!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
			.then((willDelete) => {
				if (willDelete) {

					axios.delete(`/admin/slide/${id}/delete`).then(() => {
						setData((data) => data.filter((_, i) => i !== index));
						swal("Poof! Your file has been deleted!", {
							icon: "success",
						});
					})

				} else {
					swal("Your file is safe!");
				}
			});

	};
	return (
		<div className="w-full p-8 bg-white rounded-md">
			<div className="flex items-center justify-between pb-6 ">
				<div>
					<h2 className="font-semibold text-gray-600">All Projects</h2>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center p-2 rounded-md">

					</div>
					<div className="ml-10 space-x-8 lg:ml-40">
						<Link to="/admin/slide/create" className="px-4 py-2 font-semibold tracking-wide text-white bg-indigo-600 rounded-md cursor-pointer">Create</Link>
					</div>
				</div>
			</div>
			<div>
				<div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
					<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th
										className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
										Image
									</th>
									<th
										className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{data.map((item, index) => (
									<tr key={index}>


										<td className="w-8/12 px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
											<img alt="" src={'http://localhost:3001/images/' + item.photo} className="w-full rounded" />
										</td>


										<td className="flex items-center justify-center w-full px-5 py-5 text-sm text-center bg-white border-gray-200">
											<button onClick={() => { deleteData(item._id, index) }}><i className="p-3 px-4 text-white bg-red-500 rounded fas fa-trash"></i></button>
										</td>
									</tr>
								))}


							</tbody>
						</table>

					</div>
				</div>
			</div>
		</div >
	);
}

export default Index;