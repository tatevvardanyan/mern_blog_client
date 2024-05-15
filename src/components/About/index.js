import paraqar_arm from "../../icon/paraqar_arm.png";
import style from "./style.module.css";

const About = () => {
    return (
        <div className={style.info}>
            <img src={paraqar_arm} alt="paraqar.news" />
            <div className={style.text}>
                <h1>Մեր մասին</h1>
                <p><b>Paraqar.news</b> կայքը ստեղծվել է ` Հայոց պատմություն առարկայի նախագծային աշխատանքի շրջանակներում,
                    նպատակն է ներկայացնել Փարաքար բնակավայրի հիմնադրման պատմությունը:
                </p>
                <p>
                    Կայքը ստեղծվելէ՝ 12․05․2024թ․
                </p>
                <ul>
                    <li><b>Ուսուցչուհի՝</b>  Լիլիթ Հարությունյան,</li>
                    <li><b>Դասարան՝</b>  7ա,</li>
                    <li><b>Աշակերտներ՝</b> <ol>
                        <li>Սյուզի Պետրոսյան,</li>
                        <li>Սերգեյ Ալեքսանյան,</li>
                        <li>Բարսեղ Այվազյան,</li>
                        <li> Ռոման Երեմյան,</li>
                        <li>Անի Մկրտչյան,</li>
                        <li>Գոռ Պետրոսյան</li>
                    </ol></li>
                    <li><b>Կայքի ստեղծող՝</b>  Տաթևիկ Վարդանյան:</li>
                </ul>
            </div>
        </div>

    )
}
export default About