# useClock (): ClockDate

`时钟器`

```typescript
type ClockDate = {
    ymd: string, // 年月日
    hms: string, // 时分秒
    week: string; // 周几
}

const {ymd, hms, week} = useClock();
```
