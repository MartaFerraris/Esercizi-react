import useSWR from "swr"

const fetch = (url) => {
    fetch(url)
    .then((resp) => resp.json())
}

export function useGithubUser(username) {
    const [data] = useSWR(
        `https://api.github.com/users/${username}`,
        fetch
    )
    console.log(data)

    return { data }
}
