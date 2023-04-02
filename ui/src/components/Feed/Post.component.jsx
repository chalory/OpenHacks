import { forwardRef } from 'react'

const Post = forwardRef((props, ref) => {
    const { title, name, created_at, food, notes } = props.post
    return (
        <div class="container mx-auto my-4 p-4" ref={ref}>
            <div class="mx-4 md:mx-auto my-20 max-sw-md md:max-w-2xl w-auto rounded-lg shadow-lg bg-white flex">
                <div class="px-4 py-6 flex items-start">
                    <div class="w-16 h-16 mr-4">
                        <img
                            src="http://source.unsplash.com/800x800"
                            class="rounded-full shadow object-cover"
                        />
                    </div>
                    <div class="w-full">
                        <div class="flex flex-col items-start justify-center">
                            <h2 class="-mt-1 mr-1 text-lg text-gray-900 font-semibold">{title}</h2>
                            <small class="text-sm text-gray-700">{name}</small>
                        </div>
                        <div class="text-sm text-gray-500">{created_at}</div>
                        <div class="mt-3 text-sm text-gray-700">
                            {food}
                        </div>
                        <div class="mt-3 text-sm text-gray-700">
                            {notes}
                        </div>
                        <div class="mt-4 flex items-center">
                            <div class="mr-4 text-sm text-gray-400 flex items-center">
                                <i class="fa fa-share"></i>
                                <span class="pl-1">12</span>
                            </div>
                            <div class="mr-4 text-sm text-gray-400 flex items-center">
                                <i class="fa fa-user"></i>
                                <span class="pl-1">12</span>
                            </div>
                            <div class="mr-4 text-sm text-gray-400 flex items-center">
                                <i class="fa fa-eye"></i>
                                <span class="pl-1">12</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Post

