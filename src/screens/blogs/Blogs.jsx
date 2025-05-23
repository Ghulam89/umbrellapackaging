import React, { useEffect, useState } from 'react'
import BlogCard from '../../components/common/BlogCard'
import CustomPackagingProduced from '../../components/CustomPackagingProduced';
import { BaseUrl } from '../../utils/BaseUrl';
import axios from 'axios';

const Blogs = () => {
    const [blog, setBlog] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)

    const fetchBlogs = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${BaseUrl}/blog/getAll?page=${page}`)
            if (page === 1) {
                setBlog(response?.data?.data)
            } else {
                setBlog(prev => [...prev, ...response?.data?.data])
            }
            setTotalPages(response?.data?.pagination?.totalPages)
        } catch (error) {
            console.error("Error fetching blogs:", error)
        } finally {
            setLoading(false)
        }
    }

    const loadMore = () => {
        if (page < totalPages) {
            setPage(prev => prev + 1)
        }
    }

    useEffect(() => {
        fetchBlogs()
    }, [page])

    return (
        <>
            <div className="sm:max-w-8xl max-w-[95%] mx-auto px-4 py-8">
                <div className='bg-[#2E2D2D] rounded-[8px] p-5 h-[230px] flex flex-col justify-center items-center space-y-5 mb-5'>
                    <h5 className='md:text-[43px] flex gap-2 items-center text-[30px] text-white font-semibold leading-10 text-center'>Our
                        <h5 className='md:text-[43px] text-[30px] text-[#ff931e]'> Blogs</h5></h5>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {blog?.map((item, index) => (
                        <BlogCard key={index} data={item} />
                    ))}
                </div>

                {page < totalPages && (
                    <div className="flex justify-center mt-8">
                        <button 
                            onClick={loadMore}
                            disabled={loading}
                            className="bg-[#ff931e] hover:bg-[#e68317] text-white font-medium py-2 px-6 rounded-md transition duration-300"
                        >
                            {loading ? 'Loading...' : 'Load More'}
                        </button>
                    </div>
                )}
            </div>

            <div className='mb-4'>
                <CustomPackagingProduced />
            </div>
        </>
    )
}

export default Blogs