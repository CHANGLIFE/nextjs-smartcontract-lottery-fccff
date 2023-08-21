// react-moralis:用于 React 应用程序的开发工具包，
// 它为开发者提供了与 Moralis 后端服务和以太坊区块链的连接能力

// Moralis 是一个后端即服务（BaaS）平台，专注于加速区块链应用程序的开发过程。
// 它提供了许多功能，包括用户身份验证、数据存储、Web3 集成等

// MoralisProvider 是 react-moralis 提供的一个 React 上下文提供者，
// 使得在组件中可以轻松地连接到 Moralis 服务器和以太坊网络，
// 以执行各种操作，如用户身份验证、交易等。
import { MoralisProvider } from "react-moralis"

// web3uikit 是一个用于创建基于 Web3 的用户界面的 UI 工具包。
// 它提供了一些常见的 UI 组件，如通知、模态框、按钮等，可以帮助开发者构建与区块链集成的用户友好界面。

// NotificationProvider用于管理和显示通知，例如在交易完成时显示通知。
import { NotificationProvider } from "web3uikit"
import "../styles/globals.css"

// Component 是要渲染的页面组件，
// pageProps 是传递给页面的 props
function MyApp({ Component, pageProps }) {
  //使用 MoralisProvider 建立与 Moralis 后端和以太坊网络的连接，
  //使用 NotificationProvider 提供通知管理功能。
  //然后，将你的页面组件放在这些提供者的上下文中，以便你的页面可以利用这些提供的功能和状态。
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                {/*即要渲染的页面组件*/}
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}

export default MyApp
