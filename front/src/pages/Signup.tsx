import { ChangeEvent, useState, useRef, MouseEvent } from "react";
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
import signup from "@/api/signup";
import { Logo } from "@/styles/common";

const Signup = () => {
    const nickname = useRef<HTMLInputElement>(null);
    const user_email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const passwordok = useRef<HTMLInputElement>(null);
    const password_hint = useRef<HTMLInputElement>(null);
    const region = useRef<HTMLSelectElement>(null);
    const age = useRef<HTMLSelectElement>(null);
    const gender = useRef<HTMLInputElement>(null);
    const [ValidationCheck, setValidationCheck] = useState(false);
    const [inputStatus, setInputStatus] = useState("");

    const handleClickRadioButton = (radioBtnName: string) => {
        setInputStatus(radioBtnName);
        console.log(radioBtnName);
        console.log(inputStatus);
    };
    function isvalidationtrue() {
        if (
            user_email.current == null ||
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
            user_email.current?.value == "" ||
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
        user_email: "",
        nickname: "",
        password: "",
        password_hint: "",
        age: "",
        region: "",
        gender: "",
        // token: "",
        // profile_image: "",
        // introduce: "",
        // ban: false,
        // withdrawal: false,
        // role: "",
        // createdAt: "",
        // updatedAt: "",
        // [key: string]: any;
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
            user_email.current == null ||
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
            user_email: user_email.current?.value,
            password: password.current?.value,
            password_hint: password_hint.current?.value,
            nickname: nickname.current?.value,
            gender: inputStatus,
            age: age.current?.value,
            region: region.current?.value,
            // token: "",
            // profile_image: "",
            // introduce: "",
            // ban: false,
            // withdrawal: false,
            // role: "",
            // createdAt: "",
            // updatedAt: "",
        };
        const result = await signup(formData);
        // console.log("success", formData);
        alert("??????????????????");
    };

    function selectnum() {
        var num = [];
        for (var i = 20; i < 99; i++) {
            num.push(<option value={i}>{i}???</option>);
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
                                <Label>?????????</Label>
                                <Input
                                    type="id"
                                    placeholder="???????????? ???????????????."
                                    name="nickname"
                                    ref={nickname}
                                />
                                <Label>?????????</Label>
                                <Input
                                    type="email"
                                    placeholder="???????????? ???????????????."
                                    name="email"
                                    ref={user_email}
                                />
                                <Label>??????</Label>
                                <div>
                                    <span>
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="???"
                                            defaultChecked={inputStatus === "???"}
                                            onClick={() => handleClickRadioButton("???")}
                                            ref={gender}
                                        ></input>
                                        <label style={{ marginRight: "40px" }}>???</label>
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="???"
                                            defaultChecked={inputStatus === "???"}
                                            onClick={() => handleClickRadioButton("???")}
                                            ref={gender}
                                        ></input>
                                        ???
                                    </span>
                                </div>
                                <Label>??????</Label>
                                <Select defaultValue="1" ref={age} name="age">
                                    {selectnum()}
                                </Select>
                                <Label>??????</Label>
                                <Select defaultValue="????????????" name="local" ref={region}>
                                    <option value="????????????">????????????</option>
                                    <option value="??????">??????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                    <option value="?????????">?????????</option>
                                </Select>
                            </Form>
                        </SecondContainer1>
                        <SecondContainer1>
                            <Form>
                                <Label>????????????</Label>
                                <Input
                                    type="password"
                                    placeholder="??????????????? ???????????????."
                                    name="password"
                                    ref={password}
                                />
                                <Label>???????????? ??????</Label>
                                <Input
                                    type="password"
                                    placeholder="??????????????? ???????????????."
                                    name="passwordok"
                                    ref={passwordok}
                                />
                                <Label>???????????? ??????</Label>
                                <Input
                                    placeholder="????????? ???????????????."
                                    name="passwordhint"
                                    ref={password_hint}
                                />
                                {ValidationCheck ? (
                                    <OKButton onClick={onClick} onMouseEnter={validationTrue}>
                                        ?????? ????????????
                                    </OKButton>
                                ) : (
                                    <XButton onClick={onClickPrevent} onMouseEnter={validationTrue}>
                                        ?????? ????????????
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
