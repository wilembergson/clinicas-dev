
export default function Home(){
    const dataToken = localStorage.getItem("token")
    return(
        <div>Home - {dataToken}</div>
    )
}