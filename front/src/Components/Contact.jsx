import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        content: '',
    });

    const [messageSent, setMessageSent] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log('formData:', formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting formData:', formData);

        try {
            const response = await fetch('http://localhost:3001/crud/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessageSent(true);
            } else {
                console.error('Failed to send message');
                setError('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setError('Error sending message');
        }
    };

    return (
        <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">
                contact me
            </h1>
            {messageSent && <p className="text-green-500 mb-4">Your message was sent successfully!</p>}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2">
                <div className="lg:flex gap-6">
                    <input
                        className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-x1 text-slate-500 "
                        placeholder="Enter your Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-x1 text-slate-500 "
                        placeholder="Enter your Email"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <textarea
                    className="w-full lg:my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-x1 text-slate-500 "
                    placeholder="Write your message..."
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    cols="30"
                    rows="10"
                ></textarea>
                <button
                    className="neno-button shadow-x1 hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase realtive overflow-hidden b_glow text-x1 text-bold mb-4"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;

