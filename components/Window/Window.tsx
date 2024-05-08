import styles from './Window.module.scss';
import { FC } from "react";
import { Highlight, themes } from "prism-react-renderer"

interface WindowProps {
  title: string,
  code: string,
  language: string,
  titleClass?: string,
  codeClass?: string
}

const Window: FC<WindowProps> = ({ title, code, language, titleClass, codeClass }) => {
  code = code ? code : 'No code provided'
  language = language ? language : 'html',
  codeClass = codeClass ? codeClass : 'text-sm'
  titleClass = titleClass ? titleClass : 'text-sm'
  
  return(
    <div className='flex basis-full flex-col bg-black border-solid border border-slate-800 rounded-lg'>
      <div className='flex flex-row items-center border-solid border-b border-slate-800 p-2'>
        <span className={`${styles['btnWindow']} bg-red-600 mx-1`}></span>
        <span className={`${styles['btnWindow']} bg-orange-300 mx-1`}></span>
        <span className={`${styles['btnWindow']} bg-green-600 mx-1`}></span>
        <span className={`text-slate-400 mx-auto ${titleClass}`}>{ title }</span>
      </div>
      <div className={`p-4 ${codeClass}`}>
        <Highlight
        theme={themes.synthwave84}
        code={code}
        language={language}
        >
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <pre style={styles}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span>{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}

export default Window