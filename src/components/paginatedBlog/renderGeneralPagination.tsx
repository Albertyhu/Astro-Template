import usePagination from '../../hooks/usePagination.ts'
import { DOTS } from '../../util/dots.js'
import type { RenderGeneralPaginationType } from '@/util/interface.tsx'
import uuid from 'react-uuid'
import './style.css'; 

const RenderPagination = (props: RenderGeneralPaginationType) => {
	const { category, categoryName, pageSize, totalCount, currentPage, totalPages, isMobile } = props
	const onPageChange = (newPage: number) => {
		if (newPage > 0 && newPage <= totalPages) {
			return (window.location.href = `/${category}/${categoryName}/${newPage}`)
		}
	}
	const Pagination = usePagination({ currentPage, totalCount, pageSize })
	return (
		<div
			id="PaginationContainer"
			className={`my-10 block list-none text-center ${isMobile ? 'sm:hidden' : ''}`}
		>
			<li
				id="leftArrow"
				className="PaginatedListItem PaginatedArrow"
				onClick={() => onPageChange(currentPage - 1)}
			>
				&#706; Prev
			</li>
			{Pagination?.map((page) => {
				const uniqueKey = uuid()
				if (page === DOTS) {
					return (
						<li className="PaginatedListItem" key={uniqueKey}>
							&#8230;
						</li>
					)
				}
				if (page === currentPage) {
					return (
						<li
							className="selected PaginatedListItem"
							onClick={() => onPageChange(page)}
							key={uniqueKey}
						>
							{page}
						</li>
					)
				}
				return (
					<li
						className="PaginatedListItem"
						onClick={() => onPageChange(page as number)}
						key={uniqueKey}
					>
						{page}
					</li>
				)
			})}
			<li
				id="rightArrow"
				className="PaginatedListItem PaginatedArrow"
				onClick={() => {
					onPageChange(currentPage + 1)
				}}
			>
				Next &#707;
			</li>
		</div>
	)
}
export default RenderPagination
