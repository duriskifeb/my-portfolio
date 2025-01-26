import Image from 'next/image';
import { Label } from './Label';

function Hero() {
    return (
        <div className="page-center grid grid-cols-3 items-center md:pt-40 md:pb-24 pt-12 pb-12">
            <div className="grid col-span-2 gap-6">
                <Label label="Rizkyfeb"/>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-ink md:text-5xl lg:text-6xl dark:text-white">
                    Software Engineering Student TUS '23
                </h1>
                <p className='text-ink font-light md:text-xl text-lg md:w-9/12'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis tenetur sed tempore nemo, aliquam similique totam ut delectus itaque quam quo fugiat facilis, deleniti neque eum voluptatibus? Deserunt, id earum.
                </p>
            </div>
            <div className='mx-auto'>
                <Image 
                    src="/images/Pattern.svg"
                    width={700}
                    height={700}
                    alt="Pattern"
                    className="absolute bottom-0 right-0 top-16 z-0"
                />
                <Image 
                    src="/images/AvatarRizky1.png"
                    width={224}
                    height={189}
                    alt='"pattern" 
                    className= "relative"

                />
            </div>
        </div>
    );
}

