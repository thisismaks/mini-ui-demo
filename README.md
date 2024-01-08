<h1 align="center">mini-ui-demo</h1>

<h6 align="center">Демо небольшого ui-kit</h6>

## Installation

```bash
yarn start
```

## Base example
```JavaScript
<Stack gap={2} className={styles.paper}>
    <Typography variant='h5'>RadioGroup</Typography>

    <Stack gap={1}>
        <Typography>exclusive</Typography>
        <RadioGroup exclusive value={selected} onChange={handleRadioGroupChange}>
            <FormControlLabel value="123" control={<Radio />} label={123} />
            <FormControlLabel value="456" control={<Radio />} label={456} />
            <FormControlLabel value="789" control={<Radio />} label={789} />
        </RadioGroup>
    </Stack>
</Stack>

```
По компонентам упрощенная и неполная реплика Material-Ui. Задача стояла переписать небольшое приложение без Material-Ui, но с полным сохранением внешнего вида и функциональности.