import { Box, CircularProgress } from "@mui/joy"


type ErrorHandlerType = {
    loading: boolean
    emptyDataChecker: boolean
    status: number
    text?: string
    noBorder?: boolean
    message?: string | undefined
}

export const Error = ({
    loading,
    emptyDataChecker,
    text,
    noBorder,
    message,
}: ErrorHandlerType) => {
    const withoutDataStyle = `text-lg text-center ${noBorder ? '' : 'border'} mx-4 bg-white p-3 rounded-lg tracking-wide font-semibold`

    return (
        <>
            {/* {loading ? ( */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <CircularProgress />
                    &nbsp;Loading....
                </Box>
            {/* ) : message ? (
                <div className={withoutDataStyle + ' font-semibold'}>
                    {message}
                </div>
            ) : emptyDataChecker ? (
                <div className={withoutDataStyle}>
                    {text ? text : 'Data Not Found !!'}
                </div>
            ) : (
                <div className={withoutDataStyle}>
                    Server Error, Please Try After Some Time.
                </div>
            )} */}
        </>
    )
}
