interface ILoginFormProps {
    setUserName: (userName: string) => void,
    submitForm: () => void,
}

const LoginForm: React.FC<ILoginFormProps> = ({setUserName, submitForm}) => {
    return (
        <div className="bg-gray-50 px-1 py-8 shadow sm:rounded-lg sm:px-6">
            <div className="space-y-3">
                <div>
                    <label
                        htmlFor="username"
                        className={`block text-sm font-medium leading-6 text-gray-900`}
                    >
                        Username
                    </label>
                    <div className="mt-2">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            onChange={(e) => setUserName(e.target.value)}
                            className={`bg-white px-2 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={submitForm}
                        className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;