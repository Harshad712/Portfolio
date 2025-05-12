import React from "react";
import { PhoneIcon,MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

type Inputs = {
    name:string;
    email:string;
    subject:string;
    message:string;
  };
  
type Props ={}

function ContactMe ({}:Props){
    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:harshadkokkinti@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} :
         ${formData.message} (${formData.email})`;
    };
return (
        <div className="h-screen flex flex-col relative text-center overflow-hidden md:text-left max-w-7xl px-4 sm:px-6 md:px-10 justify-evenly mx-auto items-center z-0">  
    <div className="text-4xl p-2 text-center text-[#E2711E] lg:text-7xl font-bold top-24 uppercase tracking-[4px] md:tracking-[14px]">  
        Contact Me  
    </div>  

    <div className="flex flex-col space-y-10">  
        <h4 className="text-3xl font-semibold text-center">  
            Let’s get in {" "}  
            <span className="underline decoration-[#D26412] xl:p-2">Touch!</span>  
        </h4>  

        <div className="flex flex-col md:flex-row md:gap-4 gap-2 items-center space-y-10 md:space-y-0">  
            <div className="flex flex-col items-center justify-evenly w-full">  
                <div className="flex flex-col items-center text-left text-sm font-light space-y-4">  
                    <div className="border-b border-t dark:border-neutral-500 flex items-center w-full max-w-md">  
                        <div className="whitespace-nowrap px-4 font-medium">  
                            <PhoneIcon className="text-[#E69254] h-7 w-7 p-1 animate-pulse" />  
                        </div>  
                        <div className="whitespace-nowrap px-4 my-2">  
                            <p className="text-base md:text-xl">+91-9014884219</p>  
                        </div>  
                    </div>  

                    <div className="border-b dark:border-neutral-500 flex items-center w-full max-w-md">  
                        <div className="whitespace-nowrap px-4 mb-2 font-medium">  
                            <EnvelopeIcon className="text-[#E69254] h-7 w-7 p-1 animate-pulse" />  
                        </div>  
                        <div className="whitespace-nowrap px-4 mb-2">  
                            <p className="text-base md:text-xl">harshadkokkinti@gmail.com</p>  
                        </div>  
                    </div>  

                    <div className="border-b dark:border-neutral-500 flex items-center w-full max-w-md">  
                        <div className="whitespace-nowrap px-4 font-medium mb-2">  
                            <MapPinIcon className="text-[#E69254] h-7 w-7 p-1 animate-pulse" />  
                        </div>  
                        <div className="whitespace-nowrap px-4 mb-2">  
                            <p className="text-base md:text-xl">Kadapa, Andhrapradhesh, India</p>  
                        </div>  
                    </div>  
                </div>  
            </div>  

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-full max-w-md">  
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">  
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text" />  
                    <input {...register('email')} placeholder="Email" className="contactInput" type="email" />  
                </div>  
                <div className="flex flex-col space-y-2 md:w-[106%] ">
                <input {...register('subject')} placeholder="Subject" className="contactInput " type="text" />  
                <textarea {...register('message')} placeholder="Message" className="contactInput" />  
                <button type="submit" className="py-5 px-10 rounded-md text-[#D7CBC4] uppercase font-bold bg-[#D26412]">Submit</button>  

                </div>
            </form>  
        </div>  
    </div>  
</div>
        
    )
}
export default ContactMe    
