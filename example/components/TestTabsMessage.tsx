import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

type SentType = 'channel' | 'storage';
const TestTabsMessage = () => {
    const [BC,] = useState<BroadcastChannel>(new BroadcastChannel('testMessage'));
    const [typeBc,] = useState<BroadcastChannel>(new BroadcastChannel('typeBc'));
    const [message, setMessage] = useState<string>('');
    const ref = useRef<HTMLInputElement>(null);
    const [sentType, setSentType] = useState<SentType>('channel');
    const [hasTabs, setHasTabs] = useState(false);

    useEffect(() => {
        window.addEventListener('storage', function (e) {
            if (e.key === 'testMessage') {
                setMessage(e.newValue || '');
            }
            if (e.key === 'typeBc') {
                setHasTabs(true);
                // localStorage.setItem('typeBc', `接收到了，${Date.now()}`);
            }
        });

        BC.onmessage = function (e: MessageEvent) {
            const currentTarget: BroadcastChannel = e.currentTarget as BroadcastChannel;
            if (currentTarget.name === 'testMessage') {
                setMessage(e.data);
                typeBc.postMessage('接收到了');
            }
        };

        typeBc.onmessage = function (e) {
            const currentTarget: BroadcastChannel = e.currentTarget as BroadcastChannel;
            if (currentTarget.name === 'typeBc') {
                setHasTabs(e.data !== 'close');
            }
        }

        window.addEventListener('unload', function () {
            typeBc.postMessage('close');
        });

        window.addEventListener('load', function () {
            typeBc.postMessage('init');
        });

    }, []);

    const sent = () => {
        if (ref.current) {
            if (sentType === 'channel') {
                BC.postMessage(ref.current.value)
            } else {
                localStorage.setItem('testMessage', `${Date.now()}`)
            }
        }
    }

    const toOpen = (type: SentType) => {
        setSentType(type);
        switch (type) {
            case 'channel':
                if (hasTabs) return;
                window.open('./#/testTabsMessage');
                break;
            case 'storage':
                if (hasTabs) return;
                window.open('./#/testTabsMessage');
                break;
            default:
                break;
        }
    }
    return (
        <>
            <button onClick={() => {
                toOpen('channel')
            }}>
                BroadcastChannel
            </button>
            <button onClick={() => {
                toOpen('storage')
            }}>
                LocalStorage
            </button>
            <div>
                <input ref={ref}></input><button onClick={sent}>消息发送</button>
            </div>
            <div>
                消息接受：{message}
            </div>
        </>
    )
}

export default TestTabsMessage;