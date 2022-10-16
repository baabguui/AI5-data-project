import { useState, useRef, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes";
import {
    Container,
    Form,
    Input,
    OKButton,
    XButton,
    LogoContainer,
    Label,
    TopImage,
    SecondContainer,
    SecondContainer1,
    Select,
} from "../styles/pages/signup-style";
import { signup } from "@/api/user";
import { Logo } from "@/styles/common";

const Signup = () => {
    const nickname = useRef<HTMLInputElement>(null);
    const introduce = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const passwordok = useRef<HTMLInputElement>(null);
    const password_hint = useRef<HTMLInputElement>(null);
    const region = useRef<HTMLSelectElement>(null);
    const age = useRef<HTMLSelectElement>(null);
    const gender = useRef<HTMLInputElement>(null);
    const [ValidationCheck, setValidationCheck] = useState(false);
    const [inputStatus, setInputStatus] = useState("");

    const navigate = useNavigate();

    const handleClickRadioButton = (radioBtnName: string) => {
        setInputStatus(radioBtnName);
        console.log(radioBtnName);
        console.log(inputStatus);
    };
    function isvalidationtrue() {
        if (
            // user_email.current == null ||
            email.current == null ||
            introduce.current == null ||
            password.current == null ||
            passwordok.current == null ||
            password_hint.current == null ||
            nickname.current == null ||
            gender.current == null ||
            age.current == null ||
            region.current == null
        ) {
            return;
        }
        if (
            email.current?.value == "" ||
            // user_email.current?.value == "" ||

            introduce.current?.value == "" ||
            password.current?.value == "" ||
            passwordok.current?.value == "" ||
            password_hint.current?.value == "" ||
            nickname.current?.value == "" ||
            gender.current?.value == "" ||
            age.current?.value == "" ||
            region.current?.value == ""
        ) {
            return false;
        }
        setValidationCheck(true);
    }
    let formData = {
        email: "",
        introduce: "",
        nickname: "",
        password: "",
        password_hint: "",
        age: "",
        region: "",
        gender: "",
    };
    const validationTrue = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        isvalidationtrue();
    };
    const onClickPrevent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };
    const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (
            email.current == null ||
            introduce.current == null ||
            password.current == null ||
            passwordok.current == null ||
            password_hint.current == null ||
            nickname.current == null ||
            gender.current == null ||
            age.current == null ||
            region.current == null
        ) {
            return;
        }

        formData = {
            email: email.current?.value,
            introduce: introduce.current?.value,
            password: password.current?.value,
            password_hint: password_hint.current?.value,
            nickname: nickname.current?.value,
            gender: inputStatus,
            age: age.current?.value,
            region: region.current?.value,
        };

        const result = await signup(formData);

        if (result === null) {
            // todo: error indicate
        }

        navigate(ROUTES.Home.path);
    };

    function selectnum() {
        var num = [];
        for (var i = 20; i < 99; i++) {
            num.push(<option value={i}>{i}세</option>);
        }
        return num;
    }
    return (
        <>
            <TopImage />
            <Container>
                <div>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                    <SecondContainer>
                        <SecondContainer1>
                            <Form>
                                <Label>닉네임</Label>
                                <Input
                                    type="id"
                                    placeholder="닉네임을 입력하세요."
                                    name="nickname"
                                    ref={nickname}
                                />
                                <Label>이메일</Label>
                                <Input
                                    type="email"
                                    placeholder="이메일을 입력하세요."
                                    name="email"
                                    ref={email}
                                    // ref={user_email}
                                />
                                <Label>인사말</Label>
                                <Input
                                    // type="email"
                                    placeholder="인사말을 입력하세요."
                                    name="introduce"
                                    ref={introduce}
                                    // ref={user_email}
                                />
                                <Label>성별</Label>
                                <div>
                                    <span>
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="남"
                                            defaultChecked={inputStatus === "남"}
                                            onClick={() => handleClickRadioButton("남")}
                                            ref={gender}
                                        ></input>
                                        <label style={{ marginRight: "40px" }}>남</label>
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="여"
                                            defaultChecked={inputStatus === "여"}
                                            onClick={() => handleClickRadioButton("여")}
                                            ref={gender}
                                        ></input>
                                        여
                                    </span>
                                </div>
                                <Label>나이</Label>
                                {/* <Select defaultValue="1" name="age"> */}
                                <Select defaultValue="1" ref={age} name="age">
                                    {selectnum()}
                                </Select>
                                <Label>지역</Label>
                                <Select defaultValue="해당없음" name="local" ref={region}>
                                    {/* <Select defaultValue="해당없음" name="local"> */}
                                    <option value="해당없음">해당없음</option>
                                    <option value="서울">서울</option>
                                    <option value="경기도">경기도</option>
                                    <option value="강원도">강원도</option>
                                    <option value="충청도">충청도</option>
                                    <option value="경상도">경상도</option>
                                    <option value="전라도">전라도</option>
                                </Select>
                            </Form>
                        </SecondContainer1>
                        <SecondContainer1>
                            <Form>
                                <Label>비밀번호</Label>
                                <Input
                                    type="password"
                                    placeholder="비밀번호를 입력하세요."
                                    name="password"
                                    ref={password}
                                />
                                <Label>비밀번호 확인</Label>
                                <Input
                                    type="password"
                                    placeholder="비밀번호를 입력하세요."
                                    name="passwordok"
                                    ref={passwordok}
                                />
                                <Label>비밀번호 힌트</Label>
                                <Input
                                    placeholder="힌트를 입력하세요."
                                    name="passwordhint"
                                    ref={password_hint}
                                />
                                {ValidationCheck ? (
                                    <OKButton onClick={onClick} onMouseEnter={validationTrue}>
                                        회원 가입하기
                                    </OKButton>
                                ) : (
                                    <XButton onClick={onClickPrevent} onMouseEnter={validationTrue}>
                                        회원 가입하기
                                    </XButton>
                                )}
                            </Form>
                        </SecondContainer1>
                    </SecondContainer>
                </div>
            </Container>
        </>
    );
};

export default Signup;
