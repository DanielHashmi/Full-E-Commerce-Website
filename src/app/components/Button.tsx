
const Button = ({ name, mt = true }: { name: string, mt?: boolean }) => {
    return (
        <button className={`px-12 ${mt && 'mt-12'} py-3 rounded-sm text-white bg-[#db4444]`}>{name}</button>

    )
}

export default Button