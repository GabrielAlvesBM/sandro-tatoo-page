type ArticleProps = {
    title   : string;
    content : string;
}

export default function Article({ title, content }: ArticleProps) {
    return (
        <article className="flex-1">
            <h2 className="mb-5 font-black text-lg"> {title} </h2>
            <p className="font-extralight text-sm text-whiteGray"> {content} </p>
        </article>
    );
}