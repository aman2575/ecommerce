import { ServerStyleSheets } from "@material-ui/core/styles";
import App from "next/app";
import Document, {Head, Html, NextScript, Main} from "next/document";
import React from "react";
export default class MyDocument extends Document {
    render(){
        return(
            <Html lang='en'>
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => {
        return originalRenderPage({
            enhanceApp:(App) =>(props) => sheets.collect(<App {...props} />),
        })
    }
    const initalProps = await Document.getInitialProps(ctx);
    return{
        ...initalProps,
        styles: [
            ...React.Children.toArray(initalProps.styles), 
            sheets.getStyleElement()
        ],
    }
}