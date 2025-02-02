const LoginForm = () => {
    return (
        <div className="bg-gray-50 px-1 py-8 shadow sm:rounded-lg sm:px-6">
            <div className="space-y-3">
                <div>
                    <label
                        htmlFor="username"
                        className={`block text-sm font-medium leading-6 text-gray-900`}
                    >
                        Username or email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="username"
                            name="username"
                            value=""
                            type="text"
                            className={`bg-white px-2 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className={`block text-sm font-medium leading-6 text-gray-900`}
                    >
                        Password
                    </label>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            value=""
                            type="password"
                            autoComplete="current-password"
                            className={`bg-white px-2 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;