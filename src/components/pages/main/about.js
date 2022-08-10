import React from "react";
export function About() {
    return(
    <section className='mb-20'>
    <h1 className='header'>About us</h1>
        <div>
            <p className='max-w-3xl'>
            Mero studios is a group of game developers who make indie games on following engines:
            </p>
            <ul className='list-disc ml-10'>
            <li>Unreal Engine 5 (Blueprints) </li>
            <li>Unity (C#) </li>
            </ul>
            <p>
            Our team:
            </p>
            <ul className='list-disc ml-10'>
            <li>Mero - Main developer, Game designer</li>
            <li>Dawijas - Sound engineer</li>
            <li>Gofrywplynie - Social media</li>
            <li>Maciejka - Web developer</li>
            </ul>
        </div>
    </section>
    )
}