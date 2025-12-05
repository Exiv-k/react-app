import "./index.scss"
import {Card, Form, Input, Button} from 'antd'
import logo from '@/assets/logo.png'

const Login = () => {

    const onFinish = ( values ) => {
        console.log(values);
    }

    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />
                <Form validateTrigger="onBlur" onFinish={onFinish}>
                    <Form.Item label="Username" name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!'
                                    },
                                    {
                                        pattern: /^[1-9a-zA-Z]+$/,
                                        message: 'Your password should only contain alphanumerics!'
                                    }
                                ]}>
                        <Input size="large" placeholder="Please input your username" />
                    </Form.Item>
                    <Form.Item label="Password" name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!'
                                    }
                                ]}>
                        <Input size="large" placeholder="Please enter your password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login;