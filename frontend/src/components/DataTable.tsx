import * as React from 'react';
import { DataGrid, GridColumns, GridToolbar } from '@mui/x-data-grid';
import { useFetchCommits } from '../hooks/useFetchCommits';
import { Commit } from '../interfaces/commitsInterface';


export const DataTable = () => {
    const { commits } = useFetchCommits();

    const columns: GridColumns<Commit> = [
        { field: 'message', headerName: 'Description', flex: 1 },
        { field: 'date', headerName: 'Date', flex: 1 },
        { field: 'author', headerName: 'Author', flex: 1 },
        { field: 'sha', headerName: 'Commit', flex: 1 },
    ];

    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={commits}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    componentsProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}
                />
            </div>
        </>
    );
}