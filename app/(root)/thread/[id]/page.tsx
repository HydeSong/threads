import ThreadCard from "@/components/cards/ThreadCard"
import { fetchThreadById } from "@/lib/actions/thread.actions"
import { fetchUser } from "@/lib/actions/user.actions"
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"

interface Props {
    params: {
        id: string
    }
}

const Page = async ({params}: Props) => {
    if (!params.id) return null

    const user = await currentUser()
    if (!user) return null

    const userInfo = await fetchUser(user.id)
    if (!userInfo?.onboarded) redirect('/onboarding')

    const thread = await fetchThreadById(params.id)

    return (
        <section className="relative">
            <div>
                <ThreadCard
                    id={params.id}
                    currentUserId={user?.id || ''} 
                    parentId={thread.parentId}
                    content={thread.text}
                    author={thread.author}
                    community={thread.community}
                    createAt={thread.createAt}
                    comments={thread.children}
                />
            </div>
        </section>
    )
}

export default Page