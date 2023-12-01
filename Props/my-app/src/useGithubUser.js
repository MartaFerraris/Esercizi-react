import useSWR from "swr"

const fetcher = (url) => {
    fetch(url)
    .then((resp) => resp.json())
}

export function useGithubUser(username) {
    const [data, mutate] = useSWR(
        `https://api.github.com/users/${username}`,
        fetcher
    )
    console.log({data})

    if (username === null) {
        return {data:null}
    }

    function handleRefetch() {
        mutate()
    }

    return { 
        refetch: handleRefetch,
        data 
    }   
}
