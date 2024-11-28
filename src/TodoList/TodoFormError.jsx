import { useState } from "react"
export default function TodoFormError() {
    const [hasError, setError] = useState(false)
    return <>
        {hasError && <label color="danger">
            {hasError}
        </label>}
    </>
}