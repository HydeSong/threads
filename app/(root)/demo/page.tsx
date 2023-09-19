import TabItem from "@/components/demo/TabItem"
import Tabs from "@/components/demo/Tabs"
import ThemeDemo from "@/components/demo/ThemeDemo"

const Page = () => {
    return (
        <div className="w-full flex flex-col">
            <Tabs>
                <TabItem>One</TabItem>
                <TabItem>Two</TabItem>
                <TabItem>Three</TabItem>
                <TabItem>Four</TabItem>
                <TabItem>Five</TabItem>
                <TabItem>Six</TabItem>
                <TabItem>Seven</TabItem>
            </Tabs>
            
            <h1 className="text-white">切换主题示例</h1>
            <ThemeDemo />
        </div>
    )
}

export default Page