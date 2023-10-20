

interface LabelProps {
    message: string;
    className?: string;
}

export default function Label(props : LabelProps){
    return (
        <label className={props.className} >{props.message}</label>
    );
}