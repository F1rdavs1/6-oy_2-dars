
const Button = ({children, btnStyle}) =>{
    return(
        <button className={`${btnStyle} flex items-center gap-[13px] w-[113px] px-[19px] rounded-[100px] font-medium text-[16px] leading-[19px] text-white bg-[#8BAC3E]`}>
        {children}
       </button>
    )
}
export default Button