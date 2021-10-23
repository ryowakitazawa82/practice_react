import { LANGUAGES } from "./const/languages";

export const List = ({ title }) => {
    return (
      <div>
        {
            LANGUAGES.map((lang, index) => {
                return <div key={index}>{ lang }</div>
            })
        }
      </div>
    )
  }
